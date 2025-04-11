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
    eventType: '',
    guests: ''
  });


    return (
      <section className="py-20 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Booking Modal</h2>
        <p>Coming soon...</p>
      </section>
    );
  }