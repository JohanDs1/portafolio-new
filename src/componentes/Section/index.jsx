import './index.css'

const Section = ({ title,id = '', children }) => {

    return (
        <section id={id}>
            {title && <h2 className='dark:text-slate-100'>{title}</h2>}
            {children}
        </section>
    );
};

export default Section;