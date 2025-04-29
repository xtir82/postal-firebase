import { Outlet } from 'react-router-dom';
import PostsList from "../components/PostsList.jsx";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase/firebaseConfig.js";

const Posts = () => {
  return (
  <>
    <Outlet />
    <main>
      <PostsList />
    </main>
  </>
  ) 
}

export default Posts;

export const loader = async() => {
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const response = [];  // Aquí almacenaremos los posts obtenidos.

    querySnapshot.forEach((doc) => {
      response.push({
        id: doc.id,
        ...doc.data()  // Agregamos los datos del documento al array posts
      });
    });
    return response;  // Devolvemos los posts obtenidos

  } catch (error) {
    console.error("Error al obtener documentos: ", error);
    return [];  // En caso de error, retornamos un array vacío
  }
}