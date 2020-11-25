import React, { useState } from "react"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from "@material-ui/icons/Remove"
import {IconButton} from '@material-ui/core'
import { makeStyles, FormControl } from "@material-ui/core"

const useStyles = makeStyles(theme =>({
    formControl1:{
        minWidth: 200,
        
    },

    formControl2:{
        minWidth: 50
    }
}))

function AdicionaBebida(){
    const classes = useStyles();
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const handleChange1 = e => setValue1(e.target.value1)
    const handleChange2 = e => setValue2(e.target.value2)

    const[inputFields, setInputField] = useState([
        { Bebida:'',Valor:''},
    ])

    const handleAddFields=() => {
        setInputField([inputFields,{Bebida:'',Valor:''}])
    }

    return(

        <div>
            
            <forms>{ inputFields.map((inputField, index)=>(
                <div key={index}>
                    <h5>Bebida:</h5>
                    <FormControl className={classes.formControl1}>
                                                
                    <Select onChange={handleChange1}>
                        <MenuItem value={1}>Refeição 1</MenuItem>
                        <MenuItem value={2}>Refeição 2</MenuItem>
                        <MenuItem value={3}>Refeição 3</MenuItem>
                        <MenuItem value={4}>Refeição 4</MenuItem>
                        <MenuItem value={5}>Refeição 5</MenuItem>
                    </Select>
                    </FormControl>

                   <h5>Quantidade:</h5>
                    <FormControl className={classes.formControl2}>
                    <Select id = 'menu' onChange = {handleChange2}>
                        <MenuItem value={1} >1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                    </Select>
                    </FormControl>
                    <IconButton OnClick={()=> handleAddFields()}>
                    <AddIcon/>
                    </IconButton>
                    
                    <IconButton>
                        <RemoveIcon/>
                    </IconButton>
                </div>
            ))}
            </forms>

           <Button onClick></Button>
            
           
        </div>

    )

}

export default AdicionaBebida;