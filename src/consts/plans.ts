export const PLANS = [
  {
    id: 'primefit-plus',
    title: 'PrimeFit Plus',
    description:
      '¿Quieres mejorar tu salud y forma física sin dejar tu hogar? PrimeFit es tu camino hacia una vida más activa y saludable.',
    cost: {
      value: '8',
      unit: 'sesiones'
    },
    specs: [
      'Clase de cortesía',
      'Diagnóstico completo',
      'Alimentación',
      'Acompañamiento completo'
    ],
    form: [
      {
        name: 'nombre',
        label: 'Tu Nombre',
        type: 'text',
        placeholder: 'PrimeFit',
        required: true
      },
      {
        name: 'email',
        label: 'Tu Correo',
        type: 'email',
        placeholder: 'prime@fit.com',
        required: true
      },
      {
        name: 'phone_number',
        label: 'Tu Número de Teléfono',
        type: 'tel',
        placeholder: '+57 (300) 123-4567',
        required: true
      }
    ]
  },
  {
    id: 'primefit',
    title: 'PrimeFit',
    description:
      '¿Quieres un reto personalizado para mejorar tu salud y forma física? PrimeFit es tu camino hacia una vida más activa y saludable.',
    cost: {
      value: 'Reto'
      // unit: 'USD'
    },
    specs: [
      '8 Semanas de entrenamiento',
      'Videos explicativos y demostrativos',
      'Plan y consejos de nutrición',
      'Acceso a comunidad de apoyo'
    ],
    form: [
      {
        name: 'nombre',
        label: 'Tu Nombre',
        type: 'text',
        placeholder: 'PrimeFit',
        required: true
      },
      {
        name: 'email',
        label: 'Tu Correo',
        type: 'email',
        placeholder: 'prime@fit.com',
        required: true
      },
      {
        name: 'phone_number',
        label: 'Tu Número de Teléfono',
        type: 'tel',
        placeholder: '+57 (300) 123-4567',
        required: true
      }
    ],
    popular: true
  },
  {
    id: 'primefit-pro',
    title: 'PrimeFit Pro',
    description:
      '¿Quieres mejorar tu salud y forma física sin dejar tu hogar? PrimeFit es tu camino hacia una vida más activa y saludable.',
    cost: {
      value: '12',
      unit: 'sesiones'
    },
    specs: [
      'Clase de cortesía',
      'Diagnóstico completo',
      'Alimentación',
      'Acompañamiento completo'
    ],
    form: [
      {
        name: 'nombre',
        label: 'Tu Nombre',
        type: 'text',
        placeholder: 'PrimeFit',
        required: true
      },
      {
        name: 'email',
        label: 'Tu Correo',
        type: 'email',
        placeholder: 'prime@fit.com',
        required: true
      },
      {
        name: 'phone_number',
        label: 'Tu Número de Teléfono',
        type: 'tel',
        placeholder: '+57 (300) 123-4567',
        required: true
      }
    ]
  }
]
