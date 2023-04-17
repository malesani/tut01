import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n'
import { registerLicense } from '@syncfusion/ej2-base';
// import store from './store/store.js'
Vue.config.productionTip = false
registerLicense('Mgo+DSMBaFt+QHFqVk9rWU5AaV1CX2BZdll2TWlZf04BCV5EYF5SRHJeRl1qSHxWf0ZrW3s=;Mgo+DSMBPh8sVXJ1S0d+X1hPc0BGQmFJfFBmTWlZd1RwdEU3HVdTRHRcQlliTX5ad0dmUHtdeHA=;ORg4AjUWIQA/Gnt2VFhhQlJNfVpdWXxLflF1VWtTf1Z6dFVWESFaRnZdQV1nSHpTf0RhXHZbc3RR;MTcyNTQ2M0AzMjMxMmUzMTJlMzMzOWJvK3o0QmpXU2JmaThKVW9BQlNHTUNmY3VmaUpTT2wrRFVVbG9uZUkyeVk9;MTcyNTQ2NEAzMjMxMmUzMTJlMzMzOWRQNTNqd2Z1TlVnYlNNT0ZRcmY4R2tpUTI1cDRYS3A5SjJDOU5vQnIzbm89;NRAiBiAaIQQuGjN/V0d+XU9Hf1RHQmdWfFN0RnNRdV54flVGcC0sT3RfQF5jTX9XdkxiW3pXeHZQQQ==;MTcyNTQ2NkAzMjMxMmUzMTJlMzMzOVprK1NsRCt2cGRkMk5XdzcraGpsRXB6dnBNVERvZDlmR1dCS0R1VzBXM009;MTcyNTQ2N0AzMjMxMmUzMTJlMzMzOUhZQjEwbEREeFRVbVI4eVVJZm1xaFBiRjFxdU1iMUU5VHdsZVVHQ1ZRUXc9;Mgo+DSMBMAY9C3t2VFhhQlJNfVpdWXxLflF1VWtTf1Z6dFVWESFaRnZdQV1nSHpTf0RgWX9dc3ZS;MTcyNTQ2OUAzMjMxMmUzMTJlMzMzOVZ4MXFSeTVhUllaUVBkaENpbFZMSXNCb2VrVlFYbVJreGYwLzlueHB2ZHM9;MTcyNTQ3MEAzMjMxMmUzMTJlMzMzOUh3Y05laEl6dGxYNSt4MnQ4eFhZZjdMSTltS1JDYmxjTTFWeVZ5d2dSRms9;MTcyNTQ3MUAzMjMxMmUzMTJlMzMzOVprK1NsRCt2cGRkMk5XdzcraGpsRXB6dnBNVERvZDlmR1dCS0R1VzBXM009');
new Vue({
  store,
  i18n,

  // store,
  
  render: h => h(App)
}).$mount('#app')
