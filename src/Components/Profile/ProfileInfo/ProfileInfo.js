import React from 'react'
import s from './ProfileInfo.module.css';


export default function ProfileInfo() {
  return (
	 <div>
			<div>
					<img className={s.imgContent} src="https://trofei.by/img/article/SfQ6pSjOh12M3a01.jpg?h=555&w=894&fit=crop&s=5201375400d790b81f27648d11982cf7" alt="Minsk" /> 
			</div>
			<div className={s.itemMess}>
					avat + descr					 
			</div>
	 </div>
  )
}
