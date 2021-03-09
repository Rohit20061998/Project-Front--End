import React from 'react';
import AppHeader from '../common/header';
import { Button } from 'antd';
import { Carousel } from 'antd';
import AppFooter from '../common/footer';
import Login from '../Login';


const items = [
  {
    key: '1',
    title: 'Productive Work and Inspiring Management',
    content: 'Kanban is a modern work management platform that brings together the best tools for high-level planning, project and product management, task organization and productivity growth based on transparency, agility, and motivation.',
  },
  {
    key: '2',
    title: 'Connect Goals, Strategy and Execution',
    content: 'Kanban allows you to put together your business goals and strategic planning, organize and manage project execution, track progress towards KPIs, results and achievements. All within one',
  },
  {
    key: '3',
    title: 'Visualize Your Work',
    content: 'Kanban gives managers and team members a quick, at-a-glance view into whats going on. At any time, see your overall workload, know what to work on next, understand current priorities, and be able to easily reorganize work when the business goals change.',
  },
]

function AppHero() {
  return (
   
    <div id="hero" className="heroBlock">

      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">Know More</Button>
                  <Button size="large"><a href="../Login">Sign in</a></Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;