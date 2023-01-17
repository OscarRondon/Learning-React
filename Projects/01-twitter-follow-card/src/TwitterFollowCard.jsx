import { useState } from "react";
export function TwitterFollowCard({ name, formatUserName, userName, children, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const text = isFollowing ? "Following" : "Follow";
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";

    const handleClick = () => { setIsFollowing(!isFollowing); };

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="Avatar"
                    src={children} />
                <div className='tw-followCard-info'>
                    {name}
                    <span className='tw-followCard-infoUserName'>
                        {formatUserName(userName)}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Unfollow</span>
                </button>
            </aside>
        </article>
    );
}