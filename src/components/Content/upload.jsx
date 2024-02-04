import React from 'react'
import axios from 'axios';
import {Box, Button, FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'

class SimpleReactFileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://example.com/file-upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  axios.post(url, formData,config)
  }

  render() {
    return (
        


        <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
        >
        <FormControl id="adSize">
            <FormLabel >Size of Advertisement</FormLabel>
            <Input focusBorderColor="brand.blue" type="text" placeholder="#" borderWidth={'2px'} color={'brand.dark_blue'} />
        </FormControl>
        <FormControl id="quantity">
            <FormLabel>Quantity</FormLabel>
            <Input focusBorderColor="brand.blue" type="text" placeholder="10" borderWidth={'2px'} color={'brand.dark_blue'}/>
        </FormControl>
        
        <FormControl id="price">
            <FormLabel>Price per Advertisement</FormLabel>
            <Input
            focusBorderColor="brand.blue"
            type="email"
            placeholder="Rs.200"
            borderWidth={'2px'}
            />
        </FormControl>
        
        <FormControl id="vehicleType">
            <FormLabel>Vehicle Type</FormLabel>
            <Select focusBorderColor="brand.blue" placeholder="Select country" borderWidth={'2px'} color={'brand.dark_blue'}>
            <option value="autoRiksha" selected>
                Auto Riksha
            </option>
            <option value="ERiksha">E-Rikhsa</option>
            <option value="taxi">Taxi</option>
            <option value="cycleRiksha">Cycle Riksha</option>
            </Select>
        </FormControl>
        <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <Box mt={0} py={5} px={0} borderTopWidth={1} borderColor="brand.light">
          <Button>Upload</Button>
        </Box>
      </form>
   
        </Grid>
        )
    }

     
}



export default SimpleReactFileUpload