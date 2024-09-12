
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'keep-react'


export const Chart = () => {
  const data = [
    {
      name: 'Mon',
      temp: 22,
      deg: 0,
    },
    {
      name: 'Tues',
      temp: 23,
      deg: 5,
    },
    {
      name: 'wed',
      temp: 20,
      deg: 10,
    },
    {
      name: 'Thu',
      temp: 24,
      deg: 15,
    },
    {
      name: 'Fri',
      temp: 19,
      deg: 20,
    },
    {
      name:'Sat',
      temp:20,
      deg:25
    },{
      name:"sun",
      temp:22,
      deg:30

    }
  ]


  
  return (
  <div className='w-[100%] h-[100vh] flex justify-center items-center  border-solid border-2'>
  <div className='xl:w-[70%]'>
  <ResponsiveContainer width="100%" height={500} >
      <BarChart data={data}>
        <Bar radius={[8, 8, 0, 0]} barSize={40} dataKey="temp" className="fill-primary-500 dark:fill-primary-600" />
        <XAxis
          className="text-body-4 font-medium text-metal-600"
          dataKey="name"
          stroke="#000000"
          tickSize={10}
          tickLine={false}
          strokeWidth={0.5}
        />
        <YAxis
          className="text-body-4 font-medium text-metal-600"
          tickSize={10}
          dataKey="deg"
          stroke="#000000"
          tickLine={false}
          strokeWidth={0.5}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>

  </div>
  )
}

