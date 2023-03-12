export default ({ children, customClass = "" }) => {
    return (
        <>
        <div className={`popup-wrap ${customClass}`}>
            { children }
        </div>
        </>
    )
}