import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './blog-gallery.styles.scss';

import React from 'react'

const BlogGallery = () => {
    return (
        <div className="blogs-section">
            <div className="blog-section-title">
                <h1>บทความ</h1>
            </div>
            <div className="blogs-container">

                <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://images.unsplash.com/photo-1652502060260-15b075518034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Noto Sans Thai' }}>
                            ตัวอย่างบทความ
                        </Typography>
                        <Typography className="lineClamp" variant="body2" color="text.secondary">
                            วิทย์สปิริต เฮียเคสเยนโอวัลติน แต๋วชิฟฟอนเมเปิล มอคคาฮิปโปติ๋ม ไนน์ตะหงิดไรเฟิลคอมเมนท์ แชมพู เอ๋อดีไซน์เนอร์วีเจสมิติเวชกุมภาพันธ์ เซาท์พาสปอร์ต ลาเต้บอยคอตต์รีไซเคิล ต่อรองคอมพ์เก๊ะเพียบแปร้ ป๊อกโหลยโท่ย พันธกิจสเตริโอไอซ์สปอร์ต สเตอริโอเมี่ยงคำ เบนโลโพลล์ ซิตีพาร์ บราแชมพูตัวเองโปสเตอร์สตีล
                            วิทย์สปิริต เฮียเคสเยนโอวัลติน แต๋วชิฟฟอนเมเปิล มอคคาฮิปโปติ๋ม ไนน์ตะหงิดไรเฟิลคอมเมนท์ แชมพู เอ๋อดีไซน์เนอร์วีเจสมิติเวชกุมภาพันธ์ เซาท์พาสปอร์ต ลาเต้บอยคอตต์รีไซเคิล ต่อรองคอมพ์เก๊ะเพียบแปร้ ป๊อกโหลยโท่ย พันธกิจสเตริโอไอซ์สปอร์ต สเตอริโอเมี่ยงคำ เบนโลโพลล์ ซิตีพาร์ บราแชมพูตัวเองโปสเตอร์สตีล
                            วิทย์สปิริต เฮียเคสเยนโอวัลติน แต๋วชิฟฟอนเมเปิล มอคคาฮิปโปติ๋ม ไนน์ตะหงิดไรเฟิลคอมเมนท์ แชมพู เอ๋อดีไซน์เนอร์วีเจสมิติเวชกุมภาพันธ์ เซาท์พาสปอร์ต ลาเต้บอยคอตต์รีไซเคิล ต่อรองคอมพ์เก๊ะเพียบแปร้ ป๊อกโหลยโท่ย พันธกิจสเตริโอไอซ์สปอร์ต สเตอริโอเมี่ยงคำ เบนโลโพลล์ ซิตีพาร์ บราแชมพูตัวเองโปสเตอร์สตีล
                            วิทย์สปิริต เฮียเคสเยนโอวัลติน แต๋วชิฟฟอนเมเปิล มอคคาฮิปโปติ๋ม ไนน์ตะหงิดไรเฟิลคอมเมนท์ แชมพู เอ๋อดีไซน์เนอร์วีเจสมิติเวชกุมภาพันธ์ เซาท์พาสปอร์ต ลาเต้บอยคอตต์รีไซเคิล ต่อรองคอมพ์เก๊ะเพียบแปร้ ป๊อกโหลยโท่ย พันธกิจสเตริโอไอซ์สปอร์ต สเตอริโอเมี่ยงคำ เบนโลโพลล์ ซิตีพาร์ บราแชมพูตัวเองโปสเตอร์สตีล
                            วิทย์สปิริต เฮียเคสเยนโอวัลติน แต๋วชิฟฟอนเมเปิล มอคคาฮิปโปติ๋ม ไนน์ตะหงิดไรเฟิลคอมเมนท์ แชมพู เอ๋อดีไซน์เนอร์วีเจสมิติเวชกุมภาพันธ์ เซาท์พาสปอร์ต ลาเต้บอยคอตต์รีไซเคิล ต่อรองคอมพ์เก๊ะเพียบแปร้ ป๊อกโหลยโท่ย พันธกิจสเตริโอไอซ์สปอร์ต สเตอริโอเมี่ยงคำ เบนโลโพลล์ ซิตีพาร์ บราแชมพูตัวเองโปสเตอร์สตีล
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">แชร์</Button>
                        <Button size="small">อ่านต่อ</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://images.unsplash.com/photo-1652502060260-15b075518034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Noto Sans Thai' }}>
                            ตัวอย่างบทความ
                        </Typography>
                        <Typography className="lineClamp" variant="body2" color="text.secondary">
                            วิทย์สปิริต เฮียเคสเยนโอวัลติน แต๋วชิฟฟอนเมเปิล มอคคาฮิปโปติ๋ม ไนน์ตะหงิดไรเฟิลคอมเมนท์ แชมพู เอ๋อดีไซน์เนอร์วีเจสมิติเวชกุมภาพันธ์ เซาท์พาสปอร์ต ลาเต้บอยคอตต์รีไซเคิล ต่อรองคอมพ์เก๊ะเพียบแปร้ ป๊อกโหลยโท่ย พันธกิจสเตริโอไอซ์สปอร์ต สเตอริโอเมี่ยงคำ เบนโลโพลล์ ซิตีพาร์ บราแชมพูตัวเองโปสเตอร์สตีล
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">แชร์</Button>
                        <Button size="small">อ่านต่อ</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://images.unsplash.com/photo-1652502060260-15b075518034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Noto Sans Thai' }}>
                            ตัวอย่างบทความ
                        </Typography>
                        <Typography className="lineClamp" variant="body2" color="text.secondary">
                            วิทย์สปิริต เฮียเคสเยนโอวัลติน แต๋วชิฟฟอนเมเปิล มอคคาฮิปโปติ๋ม ไนน์ตะหงิดไรเฟิลคอมเมนท์ แชมพู เอ๋อดีไซน์เนอร์วีเจสมิติเวชกุมภาพันธ์ เซาท์พาสปอร์ต ลาเต้บอยคอตต์รีไซเคิล ต่อรองคอมพ์เก๊ะเพียบแปร้ ป๊อกโหลยโท่ย พันธกิจสเตริโอไอซ์สปอร์ต สเตอริโอเมี่ยงคำ เบนโลโพลล์ ซิตีพาร์ บราแชมพูตัวเองโปสเตอร์สตีล
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">แชร์</Button>
                        <Button size="small">อ่านต่อ</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://images.unsplash.com/photo-1652502060260-15b075518034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Noto Sans Thai' }}>
                            ตัวอย่างบทความ
                        </Typography>
                        <Typography className="lineClamp" variant="body2" color="text.secondary">
                            วิทย์สปิริต เฮียเคสเยนโอวัลติน แต๋วชิฟฟอนเมเปิล มอคคาฮิปโปติ๋ม ไนน์ตะหงิดไรเฟิลคอมเมนท์ แชมพู เอ๋อดีไซน์เนอร์วีเจสมิติเวชกุมภาพันธ์ เซาท์พาสปอร์ต ลาเต้บอยคอตต์รีไซเคิล ต่อรองคอมพ์เก๊ะเพียบแปร้ ป๊อกโหลยโท่ย พันธกิจสเตริโอไอซ์สปอร์ต สเตอริโอเมี่ยงคำ เบนโลโพลล์ ซิตีพาร์ บราแชมพูตัวเองโปสเตอร์สตีล
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">แชร์</Button>
                        <Button size="small">อ่านต่อ</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://images.unsplash.com/photo-1652502060260-15b075518034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Noto Sans Thai' }}>
                            ตัวอย่างบทความ
                        </Typography>
                        <Typography className="lineClamp" variant="body2" color="text.secondary">
                            วิทย์สปิริต เฮียเคสเยนโอวัลติน แต๋วชิฟฟอนเมเปิล มอคคาฮิปโปติ๋ม ไนน์ตะหงิดไรเฟิลคอมเมนท์ แชมพู เอ๋อดีไซน์เนอร์วีเจสมิติเวชกุมภาพันธ์ เซาท์พาสปอร์ต ลาเต้บอยคอตต์รีไซเคิล ต่อรองคอมพ์เก๊ะเพียบแปร้ ป๊อกโหลยโท่ย พันธกิจสเตริโอไอซ์สปอร์ต สเตอริโอเมี่ยงคำ เบนโลโพลล์ ซิตีพาร์ บราแชมพูตัวเองโปสเตอร์สตีล
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">แชร์</Button>
                        <Button size="small">อ่านต่อ</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://images.unsplash.com/photo-1652502060260-15b075518034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Noto Sans Thai' }}>
                            ตัวอย่างบทความ
                        </Typography>
                        <Typography className="lineClamp" variant="body2" color="text.secondary">
                            วิทย์สปิริต เฮียเคสเยนโอวัลติน แต๋วชิฟฟอนเมเปิล มอคคาฮิปโปติ๋ม ไนน์ตะหงิดไรเฟิลคอมเมนท์ แชมพู เอ๋อดีไซน์เนอร์วีเจสมิติเวชกุมภาพันธ์ เซาท์พาสปอร์ต ลาเต้บอยคอตต์รีไซเคิล ต่อรองคอมพ์เก๊ะเพียบแปร้ ป๊อกโหลยโท่ย พันธกิจสเตริโอไอซ์สปอร์ต สเตอริโอเมี่ยงคำ เบนโลโพลล์ ซิตีพาร์ บราแชมพูตัวเองโปสเตอร์สตีล
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">แชร์</Button>
                        <Button size="small">อ่านต่อ</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://images.unsplash.com/photo-1652502060260-15b075518034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Noto Sans Thai' }}>
                            ตัวอย่างบทความ
                        </Typography>
                        <Typography className="lineClamp" variant="body2" color="text.secondary">
                            วิทย์สปิริต เฮียเคสเยนโอวัลติน แต๋วชิฟฟอนเมเปิล มอคคาฮิปโปติ๋ม ไนน์ตะหงิดไรเฟิลคอมเมนท์ แชมพู เอ๋อดีไซน์เนอร์วีเจสมิติเวชกุมภาพันธ์ เซาท์พาสปอร์ต ลาเต้บอยคอตต์รีไซเคิล ต่อรองคอมพ์เก๊ะเพียบแปร้ ป๊อกโหลยโท่ย พันธกิจสเตริโอไอซ์สปอร์ต สเตอริโอเมี่ยงคำ เบนโลโพลล์ ซิตีพาร์ บราแชมพูตัวเองโปสเตอร์สตีล
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">แชร์</Button>
                        <Button size="small">อ่านต่อ</Button>
                    </CardActions>
                </Card>



            </div>



        </div>
    )
}

export default BlogGallery