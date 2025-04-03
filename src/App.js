import logo from './logo.svg';
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <h1>Outlier Detection Visualization Mappings</h1>
      <h4>A page showcasing outlier detection for three various datasets from the UCI Machine Learning Repository</h4>
      <h4>Click the buttons to display the corresponding dataset and heatmaps for outlier detection</h4>
      <div className='control-panel'>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={() => {
            const Wholesale = document.getElementById('Wholesale');
            Wholesale.style.display = 'flex';
            const Cancer = document.getElementById('Breast_Cancer');
            Cancer.style.display = 'none';
            const Auto = document.getElementById('Auto_MPG');
            Auto.style.display = 'none';
          }}>Wholesale</Button>
          <Button variant="contained" onClick={() => {
            const Wholesale = document.getElementById('Wholesale');
            Wholesale.style.display = 'none';
            const Cancer = document.getElementById('Breast_Cancer');
            Cancer.style.display = 'flex';
            const Auto = document.getElementById('Auto_MPG');
            Auto.style.display = 'none';
          }}>Breast Cancer</Button>
          <Button variant="contained" onClick={() => {
            const Wholesale = document.getElementById('Wholesale');
            Wholesale.style.display = 'none';
            const Cancer = document.getElementById('Breast_Cancer');
            Cancer.style.display = 'none';
            const Auto = document.getElementById('Auto_MPG');
            Auto.style.display = 'flex';
          }}>Auto_MPG</Button>
        </Stack>
      </div>
      <div className='visualization-space'>
          <div id='Wholesale'>
            <div>
            <h4>Data Plot</h4>
            <img src={'hw-3-photos/wholesale_dataset/plot_2025-03-31 00-17-48_0.png'} className='mainplot'/>
            </div>
            <div className='Models'>
              <div className='Upper'>
              <div>
              <h4>Proximity Based Models</h4>
              <img src={'/hw-3-photos/wholesale_dataset/plot_2025-03-31 00-17-48_1.png'} className='plot'/>
              <img src={'/hw-3-photos/wholesale_dataset/plot_2025-03-31 00-17-48_2.png'} className='plot'/>
              </div>
              <div>
              <h4>Probabilistic Based Models</h4>
              <img src={'/hw-3-photos/wholesale_dataset/plot_2025-03-31 00-17-48_3.png'} className='plot'/>
              <img src={'/hw-3-photos/wholesale_dataset/plot_2025-03-31 00-17-48_4.png'} className='plot'/>
              </div>
              </div>
              <div className='Lower'>
              <div>
              <h4>Ensemble Encoding Models</h4>
              <img src={'/hw-3-photos/wholesale_dataset/plot_2025-03-31 00-17-48_5.png'} className='plot'/>
              <img src={'/hw-3-photos/wholesale_dataset/plot_2025-03-31 00-17-48_6.png'} className='plot'/>
              </div>
              <div>
              <h4>Linear Models</h4>
              <img src={'/hw-3-photos/wholesale_dataset/plot_2025-03-31 00-17-48_7.png'} className='plot'/>
              <img src={'/hw-3-photos/wholesale_dataset/plot_2025-03-31 00-17-48_8.png'} className='plot'/>
              </div>
              </div>
            </div>
            
          </div>
          <div id='Breast_Cancer'>
            <div>
            <h4>Data Plot</h4>
            <img src={'/hw-3-photos/breast_cancer_dataset/plot_2025-03-31 01-03-09_0.png'} className='mainplot'/>
            </div>
            <div className='Models'>
              <div className='Upper'>
              <div>
              <h4>Proximity Based Models</h4>
              <img src={'/hw-3-photos/breast_cancer_dataset/plot_2025-03-31 01-03-09_1.png'} className='plot'/>
              <img src={'/hw-3-photos/breast_cancer_dataset/plot_2025-03-31 01-03-09_2.png'} className='plot'/>
              </div>
              <div>
              <h4>Probabilistic Based Models</h4>
              <img src={'/hw-3-photos/breast_cancer_dataset/plot_2025-03-31 01-03-09_3.png'} className='plot'/>
              <img src={'/hw-3-photos/breast_cancer_dataset/plot_2025-03-31 01-03-09_4.png'} className='plot'/>
              </div>
              </div>
              <div className='Lower'>
              <div>
              <h4>Ensemble Encoding Models</h4>
              <img src={'/hw-3-photos/breast_cancer_dataset/plot_2025-03-31 01-03-09_5.png'} className='plot'/>
              <img src={'/hw-3-photos/breast_cancer_dataset/plot_2025-03-31 01-03-09_6.png'} className='plot'/>
              </div>
              <div>
              <h4>Linear Models</h4>
              <img src={'/hw-3-photos/breast_cancer_dataset/plot_2025-03-31 01-03-09_7.png'} className='plot'/>
              <img src={'/hw-3-photos/breast_cancer_dataset/plot_2025-03-31 01-03-09_8.png'} className='plot'/>
              </div>
              </div>
            </div>

          </div>
          <div id='Auto_MPG'>
          <div>
            <h4>Data Plot</h4>
            <img src={'/hw-3-photos/auto_mpg_dataset/plot_2025-04-02 00-03-22_0.png'} className='mainplot'/>
            </div>
            <div className='Models'>
              <div className='Upper'>
              <div>
              <h4>Proximity Based Models</h4>
              <img src={'/hw-3-photos/auto_mpg_dataset/plot_2025-04-02 00-03-22_1.png'} className='plot'/>
              <img src={'/hw-3-photos/auto_mpg_dataset/plot_2025-04-02 00-03-22_2.png'} className='plot'/>
              </div>
              <div>
              <h4>Probabilistic Based Models</h4>
              <img src={'/hw-3-photos/auto_mpg_dataset/plot_2025-04-02 00-03-22_3.png'} className='plot'/>
              <img src={'/hw-3-photos/auto_mpg_dataset/plot_2025-04-02 00-03-22_4.png'} className='plot'/>
              </div>
              </div>
              <div className='Lower'>
              <div>
              <h4>Ensemble Encoding Models</h4>
              <img src={'/hw-3-photos/auto_mpg_dataset/plot_2025-04-02 00-03-22_5.png'} className='plot'/>
              <img src={'/hw-3-photos/auto_mpg_dataset/plot_2025-04-02 00-03-22_6.png'} className='plot'/>
              </div>
              <div>
              <h4>Linear Models</h4>
              <img src={'/hw-3-photos/auto_mpg_dataset/plot_2025-04-02 00-03-22_7.png'} className='plot'/>
              <img src={'/hw-3-photos/auto_mpg_dataset/plot_2025-04-02 00-03-22_8.png'} className='plot'/>
              </div>
              </div>
            </div>
          </div>
          <img src={'/hw-3-photos/outlier-bar.png'} className='OBar'/>
      </div>
    </div>
  );
}

export default App;
