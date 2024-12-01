const ChildComponent = (props: any) => {
    console.log(props)
    return (
        <div>
            <h1 className="text-7xl">{props.name}</h1>
            <h2 className="text-4xl">{props.age}</h2>
            <p className="text-2xl">{props.profession}</p>
        </div>
    )
}

export default ChildComponent

