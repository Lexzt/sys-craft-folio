-- Seed blog categories and example posts

insert into public.blog_categories (slug, name, sort_order) values
  ('ranting', 'Ranting', 1),
  ('knowledge', 'Knowledge', 2),
  ('trials-and-failures', 'Trials and Failures', 3);

insert into public.blog_posts (category_id, title, content) values
  ((select id from public.blog_categories where slug = 'ranting'), 'Welcome to My Rants', 'This is my first rant.'),
  ((select id from public.blog_categories where slug = 'knowledge'), 'Sharing Some Knowledge', 'An article sharing knowledge.'),
  ((select id from public.blog_categories where slug = 'trials-and-failures'), 'Trials and Failures', 'A story about trials and failures.');
