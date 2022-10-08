import React from 'react'
import {Link} from "react-router-dom"
import {NEWS_ROUTE} from "../../utils/consts"
import eyeIcon from "../../assets/images/icon-eye.svg"
import bookmarkIcon from "../../assets/images/icon-bookmark.svg"
import commentsIcon from "../../assets/images/icon-comments.svg"

const NewsItem = () => {
    return (
        <div className="news__item">
            <div className="news__item__newsTag"><Link to={NEWS_ROUTE} className="news__item__newsTag__tag">Новости</Link></div>
            <div className="news__item__user">
                <div className="news__item__user__img"></div>
                <div className="news__item__user__name">Wallentainess</div>
                <div className="news__item__user__date">Сегодня в 12:24</div>
            </div>

            <div className="news__item__title content__width">Lorem ipsum dolor sit amet.</div>

            <div className="news__item__tags__list content__width">
                <div className="news__item__tag">Lorem</div>
                <div className="news__item__tag">amet</div>
                <div className="news__item__tag">adipisicing</div>
                <div className="news__item__tag">repellat</div>
                <div className="news__item__tag">explicabo</div>
                <div className="news__item__tag">officiis</div>
                <div className="news__item__tag">voluptatem</div>
                <div className="news__item__tag">repudiandae</div>
                <div className="news__item__tag">nulla</div>
                <div className="news__item__tag">facilis</div>
                <div className="news__item__tag">nesciunt</div>
                <div className="news__item__tag">minima</div>
                <div className="news__item__tag">illo</div>
                <div className="news__item__tag">doloribus</div>
                <div className="news__item__tag">Deserunt</div>
                <div className="news__item__tag">sit</div>
                <div className="news__item__tag">maxime</div>
            </div>

            <div className="news__item__preview content__width"><img src="https://cdnn21.img.ria.ru/images/148666/50/1486665008_0:0:5244:2949_1920x0_80_0_0_d6ce4b51f13b01d38fc8a7dbd125f3b1.jpg" alt=""/></div>

            <div className="news__item__description content__width">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi nesciunt nulla obcaecati officiis optio repellat voluptatem!
                Aspernatur doloribus explicabo maxime nemo non quam quibusdam, repudiandae voluptates.
                Deserunt facilis illo minima!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi nesciunt nulla obcaecati officiis optio repellat voluptatem!
                Aspernatur doloribus explicabo maxime nemo non quam quibusdam, repudiandae voluptates.
                Deserunt facilis illo minima!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi nesciunt nulla obcaecati officiis optio repellat voluptatem!
                Aspernatur doloribus explicabo maxime nemo non quam quibusdam, repudiandae voluptates.
                Deserunt facilis illo minima!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi nesciunt nulla obcaecati officiis optio repellat voluptatem!
                Aspernatur doloribus explicabo maxime nemo non quam quibusdam, repudiandae voluptates.
                Deserunt facilis illo minima!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi nesciunt nulla obcaecati officiis optio repellat voluptatem!
                Aspernatur doloribus explicabo maxime nemo non quam quibusdam, repudiandae voluptates.
                Deserunt facilis illo minima!
            </div>

            <div className="news__item__openBtn">
                <Link>Читать дальше →</Link>
            </div>

            <div className="news__item__activity">
                <div className="news__item__activity__item">
                    <img src={eyeIcon} alt=""/>
                    <span>450</span>
                </div>
                <div className="news__item__activity__item">
                    <img src={bookmarkIcon} alt=""/>
                    <span>450</span>
                </div>
                <div className="news__item__activity__item">
                    <img src={commentsIcon} alt=""/>
                    <span>450</span>
                </div>
            </div>
        </div>
    )
}

export default NewsItem