export const PLANS = [
  {
    id: 'primefit-plus',
    title: 'PrimeFit Plus',
    description:
      'PrimeFit es un plan de 8 sesiones por mes para que transformas tu vida.',
    cost: {
      value: '8',
      unit: 'sesiones'
    },
    specs: ['Entrenador', 'Nutritionista', 'Desafío'],
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
      'PrimeFit es un plan que te permite explotar tus potenciales y encontrar la forma de vivir que realmente te guste.',
    cost: {
      value: 'Reto'
      // unit: 'USD'
    },
    specs: ['Entrenador', 'Nutritionista', 'Desafío'],
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
      'PrimeFit es un plan de 12 sesiones por mes para que transformas tu vida.',
    cost: {
      value: '12',
      unit: 'sesiones'
    },
    specs: ['Entrenador', 'Nutritionista', 'Desafío'],
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
