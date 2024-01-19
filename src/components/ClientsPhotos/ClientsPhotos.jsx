import React from 'react'
import styles from '../ClientsPhotos/ClientsPhotos.module.css'
import Form from 'react-bootstrap/Form';


const ClientsPhotos = () => {
    return (
        <div className={styles.instagramContainer}>
            <header>
                <h2 className={styles.header}>Bought our products? Share your picture on our web-page!</h2>
                <hr />

                <div className={styles.instagramLogo}>
                    <img src="/assets/instagram/Instagram_icon.png" alt="" />
                    <p>Mention us on Instagram <a href='https://www.instagram.com/jj.activewear/'>@jj.activewear</a></p>
                </div>

                <div className={styles.photosContainer}>
                    <div><img src="/assets/instagram/Screenshot_1.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_6.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_3.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_4.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_5.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_7.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_8.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_9.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_1.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_6.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_4.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_3.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_4.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_5.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_7.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_8.png" alt="" /></div>
                    <div><img src="/assets/instagram/Screenshot_9.png" alt="" /></div>
                    <div className={styles.upload}>
                        <i style={{ fontSize: "40px" }} className="fa-solid fa-arrow-up-from-bracket"></i>
                        <Form.Group controlId="formFile" >
                            <Form.Label>Upload your photo here</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group></div>
                </div>
            </header>
        </div>
    )
}

export default ClientsPhotos;
