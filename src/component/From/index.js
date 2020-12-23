import React from 'react'

const FormInput = props => {
    let options = props.options || []


    return (
        <>
            <div className="form-group">
                {props.label && (<label>{props.label}</label>)}
                {/*{ props.tag === 'input' && (*/}
                {/*    <input type={props.type} name={props.name} placeholder={props.placeholder} className={props.classes}/>*/}
                {/*)}*/}



                {(() => {
                    if (props.tag === 'input') {
                        return <input type={props.type} name={props.name} placeholder={props.placeholder}
                                      className={props.classes}/>
                    } else if (props.tag === 'textarea') {
                        return <textarea name={props.name} cols="30" rows="7" placeholder={props.placeholder}
                                         className={props.classes} required/>
                    } else if (props.tag === 'password') {
                        return <input type={props.type} name={props.name} placeholder={props.placeholder}
                                      className={props.classes}/>
                    } else if (props.tag === 'button') {
                        return <button className={`btn btn-theme`}>{props.val}</button>
                    } else if (props.tag === 'select') {
                        return (
                            <select className="form-control first_null" id="city">
                                {options.map((data, index) => (
                                    <option key={index} value={data.value}>{data.text}</option>
                                ))}
                            </select>)
                    }
                })()}
            </div>
        </>
    )
}

export default FormInput

