import React from 'react'
import './slide.styles.scss'


const imageUrl =
[
  "https://images.unsplash.com/photo-1422651973727-50f085c0b26f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
  "https://images.unsplash.com/photo-1523867574998-1a336b6ded04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1629705671086-886de1ce695b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
]


const SlideShow = () => {
    return (
        <div className="slideshow-container">
            <div className="slideshows">
                <li className="photo" style={{ backgroundImage: `url(${imageUrl[0]})` }} />
                <li className="photo" style={{ backgroundImage: `url(${imageUrl[1]})`, animationDelay: "12s" }} />
                <li className="photo" style={{ backgroundImage: `url(${imageUrl[2]})`, animationDelay: "24s" }} />
            </div>
            <div className="caption">
                <h1 className="tracking-in-expand">เรียนรู้ผ่านการลงมือทำ</h1>
                <p>ครัวซองต์เก๋ากี้งั้น พาสปอร์ตหงวนศึกษาศาสตร์ออดิทอเรียมสต็อก พ่อค้าแบนเนอร์อพาร์ทเมนต์เนิร์สเซอรี ฉลุยคอร์รัปชันวอลนัท อาร์พีจี โปรโมชั่นเดโมแกรนด์ ซะอัตลักษณ์ ราชบัณฑิตยสถานจิ๊กโก๋ คัตเอาต์ซากุระไชน่าแทคติค ราเมนไวอะกร้าบอดี้ท็อปบูตฟีเวอร์ แมคเคอเรล เตี๊ยมแคร็กเกอร์แอร์ เคลียร์ฮัลโหลป๋อหลอก๋ากั่น วอลนัทมอยส์เจอไรเซอร์สไตล์ อัลบัมปัจฉิมนิเทศเอ็นจีโอแอ็คชั่น สถาปัตย์อิเลียด</p>
            </div>
        </div>
    )
}

export default SlideShow