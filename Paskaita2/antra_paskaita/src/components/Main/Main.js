import React from "react";
import styles from "./Main.module.css";
import Image from "../Image/Image";

export default function Main() {
  return (
    <main className={styles.main}>
      <h2>Photo gallery</h2>
      <p>This is my photo gallery</p>
      <div className={styles.container}>
        <Image
          descriptionText={"Girl"}
          imageSource={
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          }
        />
        <Image
          descriptionText={"Girl"}
          imageSource={
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          }
        />
        <Image
          descriptionText={"Girl"}
          imageSource={
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          }
        />
        <Image
          descriptionText={"Eye"}
          imageSource={
            "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          }
        />
        <Image
          descriptionText={"Eye"}
          imageSource={
            "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          }
        />
        <Image
          descriptionText={"Eye"}
          imageSource={
            "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          }
        />
      </div>
    </main>
  );
}
