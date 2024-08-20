import { Provider } from 'react-redux';
import { store } from './store';
import { Form } from './components/Form';

const App = () => {
  return (
    <Provider store={store}>
      <section className="w-full min-h-screen flex items-center justify-center">
        <Form />
      </section>
    </Provider>
  );
};

export default App;
