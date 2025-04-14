import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function BookingModal({ isOpen, setIsOpen, initialEventType }) {
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: initialEventType,
    guests: '1'
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      eventType: initialEventType
    }));
  }, [initialEventType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle booking submissions 
    console.log('Booking submitted:', { ...formData, date: startDate });
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    return (
      <Transition.Root show={isOpen} as={Fragment}>
        
      </Transition.Root>
    );
  }