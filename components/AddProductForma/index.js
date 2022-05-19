import {
  AddProductSection,
  AddProductForm,
  ErrorMessage,
  FormItem,
} from "./AddProductFromStyled";
import { Button } from "../../styles/Button";
import { useEffect, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { useRef } from "react";

import {
  getStorage,
  ref as ref2,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function AddProductForma() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [titleDirty, setTitleDirty] = useState(false);
  const [descriptionDirty, setDescriptionDirty] = useState(false);
  const [imageUrlDirty, setImageUrlDirty] = useState(false);
  const [titleError, setTitleError] = useState(
    'Поле "Название" не может быть пустым'
  );
  const [descriptionError, setDescriptionError] = useState(
    'Поле "Описание" не может быть пустым'
  );
  const [imageUrlError, setImageUrlError] = useState(
    "Картинка должны быть выбрана"
  );
  const [formValid, setFormValid] = useState(false);
  const [progress, setProgress] = useState(0);
  const [link, setLink] = useState("");
  const refInputFile = useRef();
  const storage = getStorage();


  useEffect(() => {
    if (titleError || descriptionError || imageUrlError || !title || !description || !imageUrl) {
      setFormValid(false);
    } else setFormValid(true);
  }, [titleError, descriptionError, imageUrlError, imageUrl]);
  
  useEffect(() => {
    if (link) {
      const db = getDatabase();
      set(ref(db, "goods/" + title), {
        title,
        description,
        picture: link,
      });
      setTitle("");
      setDescription("");
      setImageUrl(null);
      refInputFile.current.value='';
      setProgress(0);
    }
  }, [link]);

  

  function handleTitle(e) {
    setTitle(e.target.value);
    const reg = /\S{3,10}/;
    if (!reg.test(String(e.target.value).toLowerCase())) {
      setTitleError('Поле "Название" должно быть от 3 до 10 символов');
    } else {
      setTitleError("");
    }
  }
  function handleDescription(e) {
    setDescription(e.target.value);

    if (e.target.value.length < 2 || e.target.value.length > 45) {
      setDescriptionError('Поле "Описание" должно быть от 2 до 45 символов');
      if (e.target.value.length === 0) {
        setDescriptionError('Поле "Описание" не может быть пустым');
      }
    } else {
      setDescriptionError("");
    }
  }
  function handleImageUrl(e) {
    setImageUrlError("");
    setImageUrl(e.target.files[0]);
  }

  function setImageToDataBase() {
    const storageRef = ref2(storage, `/images/${imageUrl.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageUrl);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setProgress(prog);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setLink(downloadURL)
        });
      }
    );
    setFormValid(false);
  }
  

 
  function createGood(e) {
    e.preventDefault();

    setImageToDataBase();
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "title":
        setTitleDirty(true);
        break;
      case "description":
        setDescriptionDirty(true);
        break;
      case "imageUrl":
        setImageUrlDirty(true);
        break;
    }
  };

  return (
    <AddProductSection>
      <h2>Добавление товаров</h2>
      <AddProductForm>
        <FormItem>
          {titleDirty && titleError ? (
            <ErrorMessage>{titleError}</ErrorMessage>
          ) : null}
          <input
            onBlur={(e) => blurHandler(e)}
            type="text"
            name="title"
            placeholder="title"
            onChange={(e) => handleTitle(e)}
            value={title}
          />
        </FormItem>
        <FormItem>
          {descriptionDirty && descriptionError ? (
            <ErrorMessage>{descriptionError}</ErrorMessage>
          ) : null}
          <input
            onBlur={(e) => blurHandler(e)}
            type="text"
            name="description"
            placeholder="description"
            onChange={handleDescription}
            value={description}
          />
        </FormItem>
        <FormItem>
          {imageUrlDirty && imageUrlError ? (
            <ErrorMessage>{imageUrlError}</ErrorMessage>
          ) : null}
          <input
            onBlur={(e) => blurHandler(e)}
            type="file"
            name="imageUrl"
            placeholder="image url"
            onChange={handleImageUrl}
            ref={refInputFile}
          />
        </FormItem>

        <Button
          type="submit"
          disabled={!formValid}
          onClick={(e) => createGood(e)}
        >
          Send data to Database
        </Button>
        <h3>Процесс загрузки {progress}%</h3>
      </AddProductForm>
      
    </AddProductSection>
  );
}
