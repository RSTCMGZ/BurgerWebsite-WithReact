import React from 'react'
import '../styles/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <FacebookIcon />
                <InstagramIcon />
                <XIcon />


            </div>
            <p>Tüm Hakları Saklıdır | burger</p>
        </div>
    )
}

export default Footer