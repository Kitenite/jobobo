import { collection, addDoc, getFirestore } from "firebase/firestore";

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const submitEmail = async (email: string) => {
  // Add a new document with a generated id.
  const db = getFirestore();
  const docRef = await addDoc(collection(db, "email_list"), {
    email: email,
  });
  console.log("Document written with ID: ", docRef.id);
};
