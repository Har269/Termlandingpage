import React from 'react'
import {Header, Card, Container, Form,Image } from 'semantic-ui-react'

const Term = () => (
    <Container className='bg-light text-white my-3 '>
     <Header as='h2'  textAlign='center'className='text-info'>
         <Header.Content>Gift Your Family A Secure Future with Term Plans</Header.Content> 
    </Header>
    <Header size='medium' textAlign='center'>Get The Live Quotes From Top Insurance Companies
</Header>
  <Form >
    <Form.Group widths='equal'>
      <Form.Field label='Gender ' control='select'>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </Form.Field>
      <Form.Field label='TobocoUser' control='select'>
        <option value='yes'>Yes</option>
        <option value='no'>No</option>
      </Form.Field>
    </Form.Group>

    <Form.Group widths='equal'>
      <Form.Field
      label ='Annual Income'
        control='input'
        type='text'
        name=''
        placeholder='Enter annual income'
      />
      <Form.Field
         label ='DateOfBirth'
        control='input'
        type='text'
        name=''
        placeholder='Enter DOB'
      />
    </Form.Group>
     
    <Form.Group widths='equal'>
      <Form.Field
      label ='LivingCity'
        control='input'
        type='text'
        name=''
        placeholder='Enter City Name'
      />
      <Form.Field
         label ='Mobileno'
        control='input'
        type='text'
        name=''
        placeholder='Enter Mobile No'
      />
    </Form.Group>
    
  </Form>
  <div className='text-center'>
  <button class="ui primary button">Submit</button>
  </div>
 
  </Container>      
)

export default Term