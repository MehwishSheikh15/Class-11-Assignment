import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
    let name = "Mehwish Sheikh"
    let age = 19
    let profession = "Frontend Developer"

    return (
        <div className="mt-10 ">
            <ChildComponent 
                name={name} 
                age={age} 
                profession={profession} 
            />
        </div>
    )
}

export default ParentComponent
