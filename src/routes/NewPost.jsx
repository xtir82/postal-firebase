import React from 'react';
import styles from "./NewPost.module.css"
import Modal from "../components/Modal.jsx"
import {Link, Form, redirect} from "react-router-dom";
import {addDoc, collection} from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig.js";

const NewPost = () => {

    return (
        <>
            <Modal>
                <Form method='post' className={styles.form}>
                    <p>
                        <label htmlFor="body">Text</label>
                        <textarea id="body" name="body" required rows={3}/>
                    </p>
                    <p>
                        <label htmlFor="name">Your Name</label>
                        <input id="name" name="author" type="text" required />
                    </p>
                    <p className={styles.actions}>
                        <Link to=".." type="button">Cancel</Link>
                        <button>Submit</button>
                    </p>
                </Form>
            </Modal>
        </>
    )
};

export default NewPost;

export const action = async ({request}) => {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    const docRef = await addDoc(collection(db, "posts"), {
        author: postData.author,
        body: postData.body,
    })
    // docRef.id contiene el id generado automáticamente por Firestore.
    console.log("Documento insertado con ID: ", docRef.id);
    return redirect('/')
}