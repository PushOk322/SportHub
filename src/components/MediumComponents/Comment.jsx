import React, { useState, useEffect } from 'react';
import './comment.scss';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


import backArrow from '../../img/back-arrow-icon.svg';
import shopIcon from '../../img/shop-icon.svg';
import likeIcon from '../../img/like-icon.svg';
import dislikeIcon from '../../img/dislike-icon.svg';
import likeIconActive from '../../img/like-icon-active.svg';
import commentIcon from '../../img/comment-icon.svg';
import commentsIconActive from '../../img/comment-icon-active.svg';
import videoMenuIcon from '../../img/video-menu-icon.svg';


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addComment } from '../../data/store/commentSlice';
import replyAvatar from '../../img/creator-avatar-1.svg';
const Comment = (props) => {
    const navigate = useNavigate();

    const commentsObj = useSelector(state => state.comments.comments);
    const dispatch = useDispatch();

    const [liked, setLiked] = useState([]);
    const [disliked, setDisliked] = useState([]);

    const [likeIconSrc, setLikeIconSrc] = useState([]);
    const [dislikeIconSrc, setDislikeIconSrc] = useState([]);






    const totalCommentCount = commentsObj.length;
    const totalReplyCount = commentsObj.reduce(
        (count, commentData) => count + commentData.comment_replies.data.length,
        0
    );

    const initialLikedState = Array.from({ length: totalCommentCount + totalReplyCount }, () => false);
    const initialDislikedState = Array.from({ length: totalCommentCount + totalReplyCount }, () => false);

    useEffect(() => {
        if (commentsObj.length > 0 && liked.length < initialLikedState.length) {
            setLiked(liked.concat(initialLikedState.slice(liked.length)));
        }
        if (commentsObj.length > 0 && disliked.length < initialDislikedState.length) {
            setDisliked(disliked.concat(initialDislikedState.slice(disliked.length)));
        }
        if (commentsObj.length > 0 && liked.length === initialLikedState.length && likeIconSrc.length === 0) {
            setLikeIconSrc(liked.map(isLiked => isLiked === true ? likeIconActive : likeIcon));
            console.log("updated the LikeIconSrc");
        }
        if (commentsObj.length > 0 && disliked.length === initialDislikedState.length && dislikeIconSrc.length === 0) {
            setDislikeIconSrc(disliked.map(isDisliked => isDisliked ? likeIconActive : likeIcon));
            console.log("updated the DislikeIconSrc");
        }
    }, [commentsObj, liked, disliked]);

    // Rest of your component code


    const handleLikeClick = async (commentId, likedId) => {
        console.log("🚀 ~ file: Comment.jsx:67 ~ handleLikeClick ~ likedId:", likedId)

        if (!liked[likedId]) {
            // If not liked, set liked to true and disliked to false
            if (disliked[likedId]) {
                // Toggle dislikes if already disliked
                await axios.put(`https://paul-sporthub-app.onrender.com/api/comments/${commentId}`, {
                    data: {
                        comment_dislikes: commentsObj[0].comment_dislikes - 1
                    }
                });
            }
            // Toggle likes for the specific comment
            await axios.put(`https://paul-sporthub-app.onrender.com/api/comments/${commentId}`, {
                data: {
                    comment_likes: commentsObj[0].comment_likes + 1
                }
            });
            setLiked(prevLiked => ({ ...prevLiked, [likedId]: true }));
            setDisliked(prevDisliked => ({ ...prevDisliked, [likedId]: false }));

            setLikeIconSrc(prevLikedSrc => ({ ...prevLikedSrc, [likedId]: likeIconActive }));
            setDislikeIconSrc(prevDislikedSrc => ({ ...prevDislikedSrc, [likedId]: likeIcon }));

            console.log("liked" + liked);
            console.log("disliked" + disliked);
        } else {
            // If already liked, toggle back to neutral
            await axios.put(`https://paul-sporthub-app.onrender.com/api/comments/${commentId}`, {
                data: {
                    comment_likes: commentsObj[0].comment_likes - 1
                }
            });
            setLiked(prevLiked => ({ ...prevLiked, [likedId]: false }));
            setLikeIconSrc(prevLikedSrc => ({ ...prevLikedSrc, [likedId]: likeIcon }));
        }
    };

    const handleDislikeClick = async (commentId, dislikedId) => {
        console.log("🚀 ~ file: Comment.jsx:106 ~ handleDislikeClick ~ dislikedId:", dislikedId)
        if (!disliked[dislikedId]) {
            // If not disliked, set disliked to true and liked to false
            if (liked[dislikedId]) {
                // Toggle likes if already liked
                await axios.put(`https://paul-sporthub-app.onrender.com/api/comments/${commentId}`, {
                    data: {
                        comment_likes: commentsObj[0].comment_likes - 1
                    }
                });
            }
            // Toggle dislikes for the specific comment
            await axios.put(`https://paul-sporthub-app.onrender.com/api/comments/${commentId}`, {
                data: {
                    comment_dislikes: commentsObj[0].comment_dislikes + 1
                }
            });
            setDisliked(prevDisliked => ({ ...prevDisliked, [dislikedId]: true }));
            setLiked(prevLiked => ({ ...prevLiked, [dislikedId]: false }));
            setLikeIconSrc(prevLikedSrc => ({ ...prevLikedSrc, [dislikedId]: likeIcon }));
            setDislikeIconSrc(prevDislikedSrc => ({ ...prevDislikedSrc, [dislikedId]: likeIconActive }));
        } else {
            // If already disliked, toggle back to neutral
            await axios.put(`https://paul-sporthub-app.onrender.com/api/comments/${commentId}`, {
                data: {
                    comment_dislikes: commentsObj[0].comment_dislikes - 1
                }
            });
            setDisliked(prevDisliked => ({ ...prevDisliked, [dislikedId]: false }));
            setDislikeIconSrc(prevDislikedSrc => ({ ...prevDislikedSrc, [dislikedId]: likeIcon }));
        }
    };








    const [expandedComments, setExpandedComments] = useState({});

    const toggleReplies = (commentId) => {
        setExpandedComments(prevState => ({
            ...prevState,
            [commentId]: !prevState[commentId]
        }));
    };










    const [commentMenuOpen, setCommentMenuOpen] = useState({});
    const toggleCommentMenu = (commentId) => {
        setCommentMenuOpen((prevState) => ({
            ...prevState,
            [commentId]: !prevState[commentId],
        }));
    };


    const [replyInputsOpen, setReplyInputsOpen] = useState({});
    const toggleReplyInput = (commentId) => {
        setReplyInputsOpen((prevState) => ({
          ...prevState,
          [commentId]: !prevState[commentId], // Toggle the input state
        }));
      };
      




    const [replyInputs, setReplyInputs] = useState({});
    const [currentReply, setCurrentReply] = useState({});


    const sendReply = async (commentId, replyId) => {
        const storedUser = sessionStorage.getItem('currentUser');
        const parsedUser = JSON.parse(storedUser);
        console.log("method sent");
        try {
            const response = await axios.post(`https://paul-sporthub-app.onrender.com/api/comments?populate[0]=comment_author`, {
                data: {
                    comment_text: currentReply[replyId],
                    comment_author: parsedUser[0].id,
                    comment: {
                        set: [commentId]
                    }
                }
            });



            window.location.reload(false);

            setReplyInputsOpen({});
            // Close the reply input field after submission
            // toggleReplyInput(replyId);
        } catch (error) {
            console.log("🚀 ~ file: Comment.jsx:234 ~ sendReply ~ error:", error)
            // Handle the error

        }
    };


    const CommentsRender = () => {

        let combinedIndex = 0;
        return (commentsObj.map((commentData, index) => {
            // console.log("🚀 first map combinedIndex:", combinedIndex)
            let commentCombinedIndex = combinedIndex;
            combinedIndex++;
            return (

                <div className="comment-component__comment" key={index}>
                    <div className="comment-component__comment-head">
                        <div className="comment-component__author">
                            <img src={commentData.comment_author_avatar} alt="" className="comment-component__comment-avatar" />
                            <div className="comment-component__author-name">{commentData.comment_author_name}</div>
                        </div>
                        <div className="comment-component__menu">
                            <img
                                src={videoMenuIcon}
                                alt=""
                                className="comment-component__menu-icon"
                                onClick={() => toggleCommentMenu(commentCombinedIndex)}
                            />
                            {commentMenuOpen[commentCombinedIndex] && (
                                <div className="comment-component__menu-dropdown">
                                    <button onClick={() => toggleReplyInput(commentCombinedIndex)}>Reply</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="comment-component__text">
                        {commentData.comment_text}
                    </div>
                    <div className="comment-component__buttons">
                        <div className="comment-component__likes-container">
                            <div className="comment-component__likes-block" onClick={() => { handleLikeClick(commentData.comment_id, commentCombinedIndex) }}>
                                <img src={likeIconSrc[commentCombinedIndex]} alt="" className="comment-component__like-icon" />
                                <div className="comment-component__likes-count">
                                    {commentData.comment_likes}
                                </div>
                            </div>
                            <div className="comment-component__likes-line"></div>
                            <div className="comment-component__likes-block" onClick={() => { handleDislikeClick(commentData.comment_id, commentCombinedIndex) }}>
                                <img src={dislikeIconSrc[commentCombinedIndex]} alt="" className="comment-component__like-icon dis" />
                                <div className="comment-component__likes-count">
                                    {commentData.comment_dislikes}
                                </div>
                            </div>
                        </div>
                        <div className="comment-component__replies-button" onClick={() => toggleReplies(commentData.comment_id)}>
                            <img src={commentIcon} alt="" className="comment-component__replies-icon" />
                            {commentData.comment_replies.data.length + " replies"}

                        </div>
                    </div>

                    {replyInputsOpen[commentCombinedIndex] && (
                        <div className="comment-component__reply-input-box">
                            <input
                                className="comment-component__reply-input"
                                type="text"
                                placeholder="Your reply..."
                                value={currentReply[commentCombinedIndex] || ""}
                                onChange={(e) =>
                                    setCurrentReply({ ...currentReply, [commentCombinedIndex]: e.target.value })
                                }
                                autoFocus={true} // Add this line
                            />



                            <button
                                className="comment-component__reply-input-send"
                                onClick={() => sendReply(commentData.comment_id, commentCombinedIndex)}
                            >
                                Submit
                            </button>

                        </div>
                    )}



                    <div className={`comment-component__reply ${expandedComments[commentData.comment_id] && "active"}`}>
                        {commentData.comment_replies.data.map((replyData, replyIndex) => {
                            combinedIndex++;
                            let replyCombinedIndex = combinedIndex;
                            // console.log("🚀 second map combinedIndex:", combinedIndex)
                            if (replyData === commentData.comment_replies.data[commentData.comment_replies.data.length - 1]) {
                                combinedIndex++;
                            }
                            return (
                                <div className="comment-component__comment reply" key={replyIndex}>
                                    <div className="comment-component__comment-head">
                                        <div className="comment-component__author">
                                            <img src={replyData.attributes.comment_author.data.attributes.user_avatar.data ? replyData.attributes.comment_author.data.attributes.user_avatar.data.attributes.url : replyAvatar} alt="" className="comment-component__comment-avatar" />
                                            <div className="comment-component__author-name">{replyData.attributes.comment_author.data.attributes.username}</div>
                                        </div>
                                    </div>
                                    <div className="comment-component__text">
                                        {replyData.attributes.comment_text}
                                    </div>
                                    <div className="comment-component__buttons">
                                        <div className="comment-component__likes-container">
                                            <div className="comment-component__likes-block" onClick={() => { handleLikeClick(replyData.id, replyCombinedIndex) }}>
                                                <img src={likeIconSrc[replyCombinedIndex]} alt="" className="comment-component__like-icon" />
                                                <div className="comment-component__likes-count">
                                                    {replyData.attributes.comment_likes}
                                                </div>
                                            </div>
                                            <div className="comment-component__likes-block" onClick={() => { handleDislikeClick(replyData.id, replyCombinedIndex) }}>
                                                <img src={dislikeIconSrc[replyCombinedIndex]} alt="" className="comment-component__like-icon dis" />
                                                <div className="comment-component__likes-count">
                                                    {replyData.attributes.comment_dislikes}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>





                    <div className={`comment-component__hide-reply-button ${expandedComments[commentData.comment_id] && "active"}`} onClick={() => toggleReplies(commentData.comment_id)}>
                        Hide replies
                    </div>
                </div>
            );
        }));

    };

    return (
        <>
            <div className="comment-component" style={{ color: 'white' }}>
                <div className="comment-component__title">
                    {commentsObj.length} Comments
                </div>
                <div className="comment-component__comments">
                    {
                        commentsObj.length === 0 ? (
                            <div className="comment-component__loader">
                                Loading comments...
                            </div>

                        ) : (

                            <>
                                <CommentsRender></CommentsRender>
                            </>
                        )}
                </div>

            </div >
        </>
    );
};

export default Comment;
