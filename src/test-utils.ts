export function createMockClient<T>({ data, error }: { data: T | null; error: Error | null }, orders = 1) {
  return {
    from() {
      let orderCalls = 0;
      const query = {
        select() {
          return query;
        },
        eq() {
          return query;
        },
        order() {
          orderCalls++;
          if (orderCalls >= orders) {
            return Promise.resolve({ data, error });
          }
          return query;
        },
      };
      return query;
    },
  };
}
