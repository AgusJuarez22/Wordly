import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCountries } from "../../redux/actions"
import axios from "axios"
import style from "./Form.module.css"

const Form = () =>{
const {allCountries} = useSelector(state => state)
const dispatch = useDispatch()
useEffect(()=>{
dispatch(getCountries())
},[dispatch])



const [form, setForm] = useState({
    name:'',
    difficulty:1,
    duration:'',
    season:'',
    country:[]
})

const [aux, setAux] = useState('')
const [auxError, setAuxError] = useState('')


const [error, setError] = useState({
    name:'',
    difficulty:1,
    duration:'',
    season:'',
    country:[]
})


const changeHandler = (event) =>{
    const value = event.target.value
    const prop = event.target.name
    validate({...form,[prop]: value})
    setForm({...form, [prop]: value})
}

const validate = (form) =>{
        if(form.name === ''){
            setError((prevState) => ({ ...prevState, name: ' Name cannot be empty.' }));
        }
        else{
            setError((prevState) => ({ ...prevState, name: '' }));
        }
        if(form.duration === '' || form.duration === '00:00'){
            setError((prevState) => ({ ...prevState, duration: ' Duration cannot be empty or 00:00 .' }));
        }
        else{
            setError((prevState) => ({ ...prevState, duration: '' }));
        }
        if(form.season === ''){
            setError((prevState) => ({ ...prevState, season: ' Season cannot be empty.' }));
        }
        else{
            setError((prevState) => ({ ...prevState, season: '' }));
        }
}

const auxHandler = (event) =>{
    const value = event.target.value
        setAux(value)
}
const countriesHandler = (event) =>{ 
    event.preventDefault()
    const existe = allCountries.find(country => country.id === aux)
    const regex = /^[A-Z]{3}$/;
    if (regex.test(aux)){ if(existe){
        const updatedCountry = [...form.country, aux]
    setForm({
        ...form, country: updatedCountry
    })
    setAux('')
    setAuxError('')
    } else {
        setAuxError(' There is no country asociated with that code')
    }
 }
 else{
    setAuxError(' The string must be three uppercase letters.')
 }
}

const submitHandler = (event) =>{
    event.preventDefault()
    if(form.name === '' || form.duration === '' || form.season === '' || form.country.length === 0){
        alert('Incomplete form data.')
    }
    else{
        axios.post('http://localhost:3001/activities',form)
        .then(res=>alert(JSON.stringify(res.data)))
        .then(setForm({
        name:'',
        difficulty:1,
        duration:'',
        season:'',
        country:[]
        }))
        .catch(err=>alert(JSON.stringify(err)))
    }
}

    return(
        <div className={style.div}>
         <h1>Add a new activity</h1>
         <form className={style.form}>
            <div>
                <label>Name of the activity: </label>
                <input type="text" name='name' className={error.name && style.error} onChange={changeHandler} value={form.name} />
                {error.name && <span className={style.text}>{error.name}</span>}
            </div>
            <div>
                <label>Difficulty: </label>
                <input type="number" name='difficulty' onChange={changeHandler} value={form.difficulty} min="1" max="5" />
            </div>
            <div>
            <label>Duration: </label>    
            <input type="time" onChange={changeHandler} className={error.duration && style.error} value={form.duration} min="01:00" name='duration' max="24:00" />
            {error.duration && <span className={style.text}>{error.duration}</span>}
            </div>
            <div>
            <label>Season to do the activity: </label>
              <select name='season' onChange={changeHandler} className={error.season && style.error} value={form.season}>
               <option disabled='disabled' value="">Season</option>
               <option value="winter">Winter</option>
               <option value="spring">Spring</option>
               <option value="summer">Summer</option>
               <option value="autumn">Autumn</option>
              </select>
              {error.season && <span className={style.text}>{error.season}</span>}
            </div>
            <div>
                <label >Countries where the activity takes place: </label>
                <input name='country' type="text" value={aux} onChange={auxHandler} />
                <button onClick={countriesHandler}>Add</button>
                {auxError && <span className={style.text}>{auxError}</span>}
            </div>
            <button className={style.submit} type='submit' onClick={submitHandler}>Submit</button>
         </form>
        </div>
    )
}

export default Form