import s from './style.module.css';

console.log(s);
const Heading = () => {
    return(
        <>
            <h1 className={s.header}>Hello, this is a header</h1>
            <p className={s.parapraph}>and this is a tiny subheader</p>
        </>
    )
}

export default Heading;