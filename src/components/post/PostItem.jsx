import React from 'react'
import {Link} from "react-router-dom"
import eyeIcon from '../../assets/images/icon-eye.svg'
import bookmarkIcon from '../../assets/images/icon-bookmark.svg'
import commentsIcon from '../../assets/images/icon-comments.svg'

const PostItem = () => {
    return (
        <div className="post__item">
            <div className="post__head content__width">
                <div className="post__head__user__icon"></div>
                <div className="post__head__user__name">Wallentaine</div>
                <div className="post__head__user__date">Сегодня в 10:43</div>
            </div>

            <div className="post__title content__width">
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
            </div>
            <div className="post__tags content__width">
                <div className="post__tags__item">Lorem</div>
                <div className="post__tags__item">ipsum</div>
                <div className="post__tags__item">dolor</div>
                <div className="post__tags__item">consectetur</div>
                <div className="post__tags__item">elit</div>
                <div className="post__tags__item">magni</div>
                <div className="post__tags__item">numquam</div>
                <div className="post__tags__item">placeat</div>
                <div className="post__tags__item">quaerat</div>
                <div className="post__tags__item">quibusdam</div>
                <div className="post__tags__item">tempora</div>
                <div className="post__tags__item">voluptatibus</div>
                <div className="post__tags__item">esse</div>
                <div className="post__tags__item">quod</div>
            </div>
            <div className="post__preview content__width">
                <img src="https://media.tproger.ru/uploads/2019/04/learn-programming.png" alt=""/>
            </div>
            <div className="post__description content__width">
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ad, alias dolorum eligendi
                eos esse et harum laborum libero magni numquam placeat quae quaerat quibusdam
                quod quos rem tempora velit voluptatibus?
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ad, alias dolorum eligendi
                eos esse et harum laborum libero magni numquam placeat quae quaerat quibusdam
                quod quos rem tempora velit voluptatibus?
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ad, alias dolorum eligendi
                eos esse et harum laborum libero magni numquam placeat quae quaerat quibusdam
                quod quos rem tempora velit voluptatibus?
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ad, alias dolorum eligendi
                eos esse et harum laborum libero magni numquam placeat quae quaerat quibusdam
                quod quos rem tempora velit voluptatibus?
            </div>
            <div className="post__open__btn">
                <Link>Читать дальше →</Link>
            </div>
            <div className="post__activity content__width">
                <div className="post__activity__item">
                    <img src={eyeIcon} alt=""/>
                    <span>450</span>
                </div>
                <div className="post__activity__item">
                    <img src={bookmarkIcon} alt=""/>
                    <span>200</span>
                </div>
                <div className="post__activity__item">
                    <img src={commentsIcon} alt=""/>
                    <span>2</span>
                </div>
            </div>
        </div>
    )
}

export default PostItem