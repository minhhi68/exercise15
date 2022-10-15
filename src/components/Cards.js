
let img1='https://hcmuni.fpt.edu.vn/Data/Sites/1/media/2020-kim-vi/seo/campus/1-truong-dai-hoc-fpt-tphcm/truong-dai-hoc-fpt-tp-hcm-(1).jpg'

export default function Cards(){
    return(
        <div className='card'>
      <img src ={img1} alt =''/>
      <div className='card-content'>
        <h2 className='card_title'>FPT UNIVERSITY</h2>
        <p className='card_description'>D1 Street, Saigon Hi-Tech Park, Long Thanh My Ward, Thu Duc City, HCMC</p>
        
      </div>
    </div>
    )
}