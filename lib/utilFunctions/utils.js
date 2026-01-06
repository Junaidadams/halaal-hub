function getCurrentDayEnum(date = new Date()) {
  const days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  return days[date.getDay()];
}

export function getListingStatus(openingHours) {
  if (!openingHours || openingHours.length === 0) {
    return { status: "UNKNOWN", label: "Hours unavailable" };
  }

  const now = new Date();
  const today = getCurrentDayEnum(now);

  const todaysHours = openingHours.find((h) => h.day === today);

  if (!todaysHours || todaysHours.isClosed) {
    const nextOpen = findNextOpening(openingHours, now);
    return {
      status: "CLOSED",
      label: nextOpen
        ? `Opens ${nextOpen.day} at ${nextOpen.opensAt}`
        : "Closed",
    };
  }

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = toMinutes(todaysHours.opensAt);
  const closeMinutes = toMinutes(todaysHours.closesAt);

  if (nowMinutes < openMinutes) {
    return {
      status: "OPENS_LATER",
      label: `Opens at ${todaysHours.opensAt}`,
    };
  }

  if (nowMinutes >= openMinutes && nowMinutes < closeMinutes) {
    const remaining = closeMinutes - nowMinutes;
    return remaining <= 30
      ? {
          status: "CLOSES_SOON",
          label: `Closes in ${remaining} min`,
        }
      : {
          status: "OPEN",
          label: `Open • Closes at ${todaysHours.closesAt}`,
        };
  }

  // After closing
  const nextOpen = findNextOpening(openingHours, now);
  return {
    status: "CLOSED",
    label: nextOpen ? `Opens ${nextOpen.day} at ${nextOpen.opensAt}` : "Closed",
  };
}

function toMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function findNextOpening(openingHours, fromDate) {
  const days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  const todayIndex = fromDate.getDay();

  for (let i = 1; i <= 7; i++) {
    const day = days[(todayIndex + i) % 7];
    const hours = openingHours.find((h) => h.day === day);

    if (hours && !hours.isClosed && hours.opensAt) {
      return hours;
    }
  }

  return null;
}
