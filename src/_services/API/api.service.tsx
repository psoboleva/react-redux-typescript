type FetchDataOptions = {
    noJson?: boolean;
};

export class ApiService {

    //in this testing app we only GET data
    //a real API service should have also POST, PATCH, DELETE methods

    public async getData<T>(url: string, options?: FetchDataOptions): Promise<T> {
        const baseUrl = process.env.REACT_APP_API_HOST;
        let getDataPromise: Promise<T> = new Promise((resolve, reject) => {
            const cleanUrl = url.replace(/([^:]\/)\/+/g, '$1');

            fetch(`${baseUrl}/${cleanUrl}`)
                .then(async (res) => {
                    if (!res.ok) {
                        throw (res);
                    }

                    const text = await res.text();

                    if (options && options.noJson) {
                        return text;
                    }

                    const json = JSON.parse(text);
                    return json;
                })
                .then(res => {
                    resolve(res as T);
                })
                .catch(error => {
                    console.error(`API call GET '${url}' fails with code: ${error.statusCode}. Exception: ${error.toString()}`);
                    reject(error);
                });
        });

        return getDataPromise;
    }
}

export default ApiService;