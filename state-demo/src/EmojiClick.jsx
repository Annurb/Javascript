import {v4 as uuid} from 'uuid';
import {useState} from 'react';

function randomEmoji(){
    const choices = ['🎲', '🍟', '💪', '🌭', '😸', '😭', '😘' ]
    return choices[Math.floor(Math.random()*choices.length)];
}

export default function EmojiClick(){
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji()}])
    const addEmoji = () => {
        setEmojis(oldEmojis => [...emojis, {id: uuid(), emoji:  randomEmoji()}])
    }
    const deleteEmoji = (id) => {
        setEmojis((prevEmojis) =>{
            return prevEmojis.filter((e) => e.id !==id)
        })
    } 
    const makeHeart = () => {
        setEmojis((prevEmojis) =>{
            return prevEmojis.map((e) => {
                return {...e, emoji: '❤️'}
            })
        })
    }
    return(
        <div>
            {emojis.map((e) => (
                <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{fontSize:'4rem'}}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeHeart}>Make them all hearts</button>
        </div>
    )
}