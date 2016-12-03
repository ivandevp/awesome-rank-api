'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('questions', [{
      description: 'Estado Emocional',
      type: 'hse-1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Disposición a retos',
      type: 'hse-1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Adaptabilidad',
      type: 'hse-1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Expresión',
      type: 'hse-2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Escucha',
      type: 'hse-2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Participación',
      type: 'hse-2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Comunicación de Errores',
      type: 'hse-2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Comunicación y Respeto',
      type: 'hse-3',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Relación con Autoridad',
      type: 'hse-3',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Actitud Positiva',
      type: 'hse-4',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Pasión por el Trabajo',
      type: 'hse-4',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('questions', null, {});
  }
};