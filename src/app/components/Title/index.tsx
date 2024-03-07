import './styles.css'

interface Props {
    value: string
}

const Title = (props: Props) => {
    return (
        <h2 className='titulo'>Título
            {props.value}
        </h2>
    )
}

export default Title;