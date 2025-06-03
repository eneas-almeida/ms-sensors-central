import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 2000, // 50 usuários simultâneos
    iterations: 100000, // Total de 10.000 requisições
};

export default function () {
    const url = 'http://localhost:8081/api/v1/sensors';

    const payload = JSON.stringify({
        sensorId: '1394644386364172288',
        value: '42.1',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    check(res, {
        'status é 200': (r) => r.status === 200,
    });
}
