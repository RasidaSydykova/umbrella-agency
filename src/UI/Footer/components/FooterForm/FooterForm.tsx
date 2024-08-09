'use-client'
import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import './FooterForm.scss';
import axios from 'axios';

const FooterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number_or_email: '',
    service_titles: [],
    review: ''
  })
  const [options, setOptions] = useState()

  const getOptions = async () => {
    const { data } = await axios.get('http://34.176.229.246/api/v1/service/get/')
    setOptions(data.map((service: any) => {return({value:service.title, label:service.title})}))
  }

  const handleSubmit = (e: any) => {
    try {
      e.preventDefault()
      axios.post('http://34.176.229.246/api/v1/form/create/', formData)
      setFormData({
        name: '',
        number_or_email: '',
        service_titles: [],
        review: ''
      })
    } catch (error) {
      console.error(error)
    }
  }
  const handleChange = (type: any, value: any) => {
    setFormData((prev) => {
      return {
        ...prev,
        [type]: value
      }
    })
  }

  useEffect(() => {
    getOptions()
  }, [])

  return (
    <div className="footer-form">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-field">
          <input value={formData.name} type="text" name="name" id="name" required onChange={(e) => handleChange('name', e.target.value)}/>
          <label htmlFor="name">Ваше имя</label>
        </div>

        <div className="input-field">
          <input value={formData.number_or_email} type="tel" name="phone" id="phone" required onChange={(e) => handleChange('number_or_email', e.target.value)}/>
          <label htmlFor="phone">Ваш номер телефона или E-mail</label>
        </div>

        <div className="input-field">
          <Select 
            name="service" 
            id="service" 
            placeholder="Какая услуга вас интересует? (Можно выбрать несколько)"
            options={options}
            isMulti
            styles={{
              option: (styles) => ({
                ...styles,
                color: 'black'
              }),
              control: (styles) => 
              ({ ...styles,
                color: 'black',
                ':hover':{ borderColor: 'grey'} 
              })
            }}
            value={formData.service_titles.map((title) => {return ({value: title, label: title})})}
            onChange={(option) => {handleChange('service_titles', option.map((val) => val.value))}}
          />
        </div>

        <div className="input-field">
          <textarea value={formData.review} name="comment" id="comment" required onChange={(e) => handleChange('review', e.target.value)}/>
          <label htmlFor="service">Оставьте комментарий или задайте вопрос</label>
        </div>

        <p className="form-warning">Оставляя заявку вы соглашаетесь на обработку ваших данных</p>
        <button className="form-button" type="submit">
          Отправить
          <img
            className="form-button-arrow"
            src="/assets/umbrella-arrow-white.svg"
            alt="umbrella"
          />
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
