import log from './../log.js';
import Services from '../types/Services';
import CommandsManager from '../classes/CommandsManager';

export default class ServicesManager {
  public services: Services = {};

  constructor(commandsManager: CommandsManager) {
    this._commandsManager = commandsManager;
    this.services = {};
    this.registeredServiceNames = [];
  }

  /**
   * Registers a new service.
   *
   * @param {Object} service
   * @param {Object} configuration
   */
  registerService(service, configuration = {}) {
    if (!service) {
      return;
    }

    if (!service.name) {
      return;
    }

    if (this.registeredServiceNames.includes(service.name)) {
      return;
    }

    if (service.create) {
      this.services[service.name] = service.create({
        configuration,
        commandsManager: this._commandsManager,
        servicesManager: this,
      });
      if (service.altName) {
        this.services[service.altName] = this.services[service.name];
      }
    } else {
      return;
    }

    /* Track service registration */
    this.registeredServiceNames.push(service.name);
  }

  /**
   * An array of services, or an array of arrays that contains service
   * configuration pairs.
   *
   * @param {Object[]} services - Array of services
   */
  registerServices(services) {
    services.forEach(service => {
      const hasConfiguration = Array.isArray(service);

      if (hasConfiguration) {
        const [ohifService, configuration] = service;
        this.registerService(ohifService, configuration);
      } else {
        this.registerService(service);
      }
    });
  }
}
