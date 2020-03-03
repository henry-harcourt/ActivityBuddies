
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          user_name: 'Henry',
          notes: 'Meet in the carpark',
          dateTime: '2020-03-01  T09:00',
          tracks: 'To Summit + Ridgeline',
          skill: 'Expert',
          location_id: 1,
          attendees: 0, 
          user_id: 1
        },
        {
          id: 2,
          user_name: 'Claire',
          notes: 'Meet by the bikepump. Coffee afterwards?',
          dateTime: '2020-03-02  T12:00',
          tracks: 'To Summit + Trickle Falls',
          skill: 'Expert',
          location_id: 1,
          attendees: 0, 
          user_id: 1
        },
        {
          id: 3,
          user_name: 'Ethan',
          notes: 'Meet at the Koru entrance in the carpark',
          dateTime: '2020-03-03  T13:00',
          tracks: 'Mid Peak loop + Starfish',
          skill: 'Advanced',
          location_id: 1,
          attendees: 0, 
          user_id: 1
        },
        {
          id: 4,
          user_name: 'Kel',
          notes: 'Meet at the Saddle',
          dateTime: '2020-02-08  T13:00',
          tracks: 'Hataitai Zigzag',
          skill: 'Beginner',
          location_id: 3,
          attendees: 0, 
          user_id: 1
        },
        {
          id: 5,
          user_name: 'Dan',
          notes: 'Meet at the end of Holloway Rd',
          dateTime: '2020-02-08  T10:00',
          tracks: 'Clinical + Highbury fling + Serendipity + Transient',
          skill: 'Advanced',
          location_id: 2,
          attendees: 0, 
          user_id: 2
        },
        {
          id: 6,
          user_name: 'Seb',
          notes: 'Meeting Fat Bird resturant',
          dateTime: '2020-03-07  T12:00',
          tracks: 'Beginners loop + Skills area',
          skill: 'Beginner',
          location_id: 1,
          attendees: 0, 
          user_id: 2
        },
        {
          id: 7,
          user_name: 'Scott',
          notes: 'Meet in the carpark, can carpool if needed.',
          dateTime: '2020-03-08  T13:00',
          tracks: 'Mid Peak loop + Magic Carpet',
          skill: 'Intermediate',
          location_id: 1,
          attendees: 0, 
          user_id: 2
        },
        {
          id: 8,
          user_name: 'Clive',
          notes: 'Meet at Maranui cafe. Beer on the beach afterwards?',
          tracks: 'Airport reef end',
          dateTime: '2020-04-08  T13:00',
          tracks: '',
          skill: 'Expert',
          location_id: 7,
          attendees: 0
        },
        {
          id: 9,
          user_name: 'Reuben',
          notes: 'Meet at ParrodDog. Spare boogieboards if needed',
          dateTime: '2020-03-07  T12:00',
          tracks: 'Maranui end',
          skill: 'Beginner',
          location_id: 7,
          attendees: 0, 
          user_id: 2
        },
        {
          id: 10,
          user_name: 'Samantha',
          notes: 'Meet at airport side carpark. Fish and chips afterwards?',
          dateTime: '2020-04-08  T13:00',
          tracks: 'Airport reef end',
          skill: 'Intermediate',
          location_id: 7,
          attendees: 0,
          user_id: 3
        },
        {
          id: 11,
          user_name: 'Ollie',
          notes: 'Keen to run it if anyone else is?',
          dateTime: '2020-03-08  T13:00',
          tracks: 'Skyline',
          skill: 'Expert',
          location_id: 5,
          attendees: 0, 
          user_id: 3
        },
        {
          id: 12,
          user_name: 'Holly',
          notes: 'Cruisey walk in the valley.',
          dateTime: '2020-03-08  T13:00',
          tracks: 'Five Mile Loop',
          skill: 'Intermediate',
          location_id: 4,
          attendees: 0, 
          user_id: 3
        },
        {
          id: 13,
          user_name: 'Jack',
          notes: 'Might pick up some fish and chips to take up the hill.',
          dateTime: '2020-03-01  T13:00',
          tracks: 'Mt Victoria look-out',
          skill: 'Beginner',
          location_id: 6,
          attendees: 0, 
          user_id: 3
        }
      ]);
    });
};
