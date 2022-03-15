import React from "react";

import TaskList from "./TaskList";
import * as TaskStories from './Task.stories.js';

export default {
    component: TaskList,
    title: 'TaskList',
    decorators: [story => <div style={{ padding: '3rem'}}>{story()}</div>],
}

const Template = args => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
    //Shaping the stories thru args compostion
    //data was inherited from the Default story in Task.stories.js
    tasks: [
        { ...TaskStories.Default.args.task, id: '1', title: 'Task 1'},
        { ...TaskStories.Default.args.task, id: '2', title: 'Task 2'},
        { ...TaskStories.Default.args.task, id: '3', title: 'Task 3'},
        { ...TaskStories.Default.args.task, id: '4', title: 'Task 4'},
        { ...TaskStories.Default.args.task, id: '5', title: 'Task 5'},
        { ...TaskStories.Default.args.task, id: '6', title: 'Task 6'},
    ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    //shaping hte stories thru args compostion
    //inherirted data coming from the Default story
    tasks: [
        ...Default.args.task.slice(0,5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'},
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    //shaping the stores thru args composition
    //inherited data coming from the Loading story
    ...Loading.args,
    loading: false,
}



