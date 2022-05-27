import { useContext } from 'react'
import { ThemeContext } from '../App'

function Paragraph()
{
    const theme = useContext(ThemeContext)
    return(
        <div className={theme}>
            An example of context is the words that surround the word "read" that help the reader determine the tense of the word. An example of context is the history surrounding the story of Shakespeare's King Henry IV. ​ (linguistics) The text in which a word or passage appears and which helps ascertain its meaning.
        </div>
    )
}
export default Paragraph