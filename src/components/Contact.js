import React from 'react'
import "../styles/contact.css"
function Contact() {
    return (
        <div className='contact'>
            <div className='leftSide'>

            </div>
            <div className='rightSide'>
                <h1>Bizimle İletişime Geçin</h1>
                <form>
                    <label>Ad Soyad</label>
                    <input type='text' name='name' placeholder='Lütfen Adınızı Soyadınızı Giriniz...' />
                    <label>Email</label>
                    <input type='email' name='email' placeholder='Lütfen E-mail  Giriniz...' />
                    <label>Mesajınız</label>
                    <textarea rows="6" name='message' placeholder='Lütfen Mesajınızı  Giriniz...'></textarea>
                    <button type='submit'>Gönder</button>
                </form>
            </div>

        </div>
    )
}

export default Contact