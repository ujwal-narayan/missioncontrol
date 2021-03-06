import { cassandraDriver } from '../mocks/cassandra-driver';
jest.doMock('cassandra-driver', cassandraDriver);
import { VesselChargingProvider } from './VesselChargingProvider';
import { IVesselChargingProvider, INeed } from '../types';

describe('Drone Delivery Provider', () => {
  const provider: IVesselChargingProvider = {
    topicId: '321',
    protocol: 'vessel_charging',
    area: {
      min: {
        longitude: 1,
        latitude: 1,
      },
      max: {
        longitude: 1,
        latitude: 1,
      },
    },
    dimensions: {
      length: 1,
      width: 1,
      height: 1,
      weight: 1,
    },
  };

  const need: INeed = {
    topicId: '222',
    protocol: 'vessel_charging',
    data: {
      location: {
        longitude: 1,
        latitude: 1,
      },
    },
  };

  it('should save provider', async () => {
    const droneDeliveryProvider = new VesselChargingProvider();
    expect(await droneDeliveryProvider.save(provider)).toBe(true);
  });

  it('should load provider', async () => {
    const droneDeliveryProvider = new VesselChargingProvider();
    expect(await droneDeliveryProvider.query(need)).toEqual([provider]);
  });

  it('should save provider with no dimensions', async () => {
    const noDimensionsProvider: IVesselChargingProvider = {
      topicId: '321',
      protocol: 'vessel_charging',
      area: {
        min: {
          longitude: 1,
          latitude: 1,
        },
        max: {
          longitude: 1,
          latitude: 1,
        },
      },
    };
    const droneDeliveryProvider = new VesselChargingProvider();
    expect(await droneDeliveryProvider.save(noDimensionsProvider)).toBe(true);
  });

  it('should load provider', async () => {
    const droneDeliveryProvider = new VesselChargingProvider();
    expect(await droneDeliveryProvider.query(need)).toEqual([provider]);
  });

});
