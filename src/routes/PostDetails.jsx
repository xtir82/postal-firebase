import { useLoaderData, Link } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig.js";
import { getDoc, doc } from "firebase/firestore";

import Modal from "../components/Modal.jsx";
import styles from "./PostDetails.module.css";

import React from 'react';

const PostDetails = () => {
    const post = useLoaderData();

    if (!post) {
        return (
            <Modal>
                <main className={styles.details}>
                    <h1>Could not find a post</h1>
                    <p>Unfortunately, the requested post could not be found.</p>
                    <p>
                        <Link to=".." className={styles.btn}>
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        )
    }

    return (
        <Modal>
            <main className={styles.details}>
                <p className={styles.author}>{post.author}</p>
                <p className={styles.text}>{post.body}</p>
            </main>
        </Modal>
    );
};

export default PostDetails;

export const loader = async({params}) => {
// Usamos `doc()` para obtener un documento específico usando el ID
    const docRef = doc(db, "posts", params.postId);
    const docSnap = await getDoc(docRef);  // Obtenemos el documento
    return {
        id: docSnap.id,
        ...docSnap.data(),
    };
}