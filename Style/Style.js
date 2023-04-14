import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  resultContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  resultImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  footer: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
  buttonText:{
    height: 40,
    width: 80,
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  }
});
