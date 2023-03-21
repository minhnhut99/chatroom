{
    "_firestore": {
        "app": {
            "_isDeleted": false,
            "_options": {
                "apiKey": "AIzaSyAtVw4N9qaN7fGOlvUXribNSd3Uxs-tF7Q",
                "authDomain": "chatbot-ba694.firebaseapp.com",
                "projectId": "chatbot-ba694",
                "storageBucket": "chatbot-ba694.appspot.com",
                "messagingSenderId": "1054304384986",
                "appId": "1:1054304384986:web:eab6c30ab3dd6e704072e3",
                "measurementId": "G-9TC8SS4L8S"
            },
            "_config": {
                "name": "[DEFAULT]",
                "automaticDataCollectionEnabled": false
            },
            "_name": "[DEFAULT]",
            "_automaticDataCollectionEnabled": false,
            "_container": {
                "name": "[DEFAULT]",
                "providers": {}
            }
        },
        "databaseId": {
            "projectId": "chatbot-ba694",
            "database": "(default)"
        },
        "settings": {
            "host": "localhost:8080",
            "ssl": false,
            "ignoreUndefinedProperties": false,
            "cacheSizeBytes": 41943040,
            "experimentalForceLongPolling": false,
            "experimentalAutoDetectLongPolling": false,
            "useFetchStreams": true
        }
    },
    "_userDataWriter": {
        "firestore": {
            "app": {
                "_isDeleted": false,
                "_options": {
                    "apiKey": "AIzaSyAtVw4N9qaN7fGOlvUXribNSd3Uxs-tF7Q",
                    "authDomain": "chatbot-ba694.firebaseapp.com",
                    "projectId": "chatbot-ba694",
                    "storageBucket": "chatbot-ba694.appspot.com",
                    "messagingSenderId": "1054304384986",
                    "appId": "1:1054304384986:web:eab6c30ab3dd6e704072e3",
                    "measurementId": "G-9TC8SS4L8S"
                },
                "_config": {
                    "name": "[DEFAULT]",
                    "automaticDataCollectionEnabled": false
                },
                "_name": "[DEFAULT]",
                "_automaticDataCollectionEnabled": false,
                "_container": {
                    "name": "[DEFAULT]",
                    "providers": {}
                }
            },
            "databaseId": {
                "projectId": "chatbot-ba694",
                "database": "(default)"
            },
            "settings": {
                "host": "localhost:8080",
                "ssl": false,
                "ignoreUndefinedProperties": false,
                "cacheSizeBytes": 41943040,
                "experimentalForceLongPolling": false,
                "experimentalAutoDetectLongPolling": false,
                "useFetchStreams": true
            }
        }
    },
    "_snapshot": {
        "query": {
            "path": {
                "segments": [
                    "users"
                ],
                "offset": 0,
                "len": 1
            },
            "collectionGroup": null,
            "explicitOrderBy": [
                {
                    "field": {
                        "segments": [
                            "displayName"
                        ],
                        "offset": 0,
                        "len": 1
                    },
                    "dir": "asc"
                }
            ],
            "filters": [
                {
                    "field": {
                        "segments": [
                            "keywords"
                        ],
                        "offset": 0,
                        "len": 1
                    },
                    "op": "array-contains",
                    "value": {
                        "stringValue": "grass"
                    }
                }
            ],
            "limit": 20,
            "limitType": "F",
            "startAt": null,
            "endAt": null,
            "wt": [
                {
                    "field": {
                        "segments": [
                            "displayName"
                        ],
                        "offset": 0,
                        "len": 1
                    },
                    "dir": "asc"
                },
                {
                    "field": {
                        "segments": [
                            "__name__"
                        ],
                        "offset": 0,
                        "len": 1
                    },
                    "dir": "asc"
                }
            ],
            "gt": {
                "path": {
                    "segments": [
                        "users"
                    ],
                    "offset": 0,
                    "len": 1
                },
                "collectionGroup": null,
                "orderBy": [
                    {
                        "field": {
                            "segments": [
                                "displayName"
                            ],
                            "offset": 0,
                            "len": 1
                        },
                        "dir": "asc"
                    },
                    {
                        "field": {
                            "segments": [
                                "__name__"
                            ],
                            "offset": 0,
                            "len": 1
                        },
                        "dir": "asc"
                    }
                ],
                "filters": [
                    {
                        "field": {
                            "segments": [
                                "keywords"
                            ],
                            "offset": 0,
                            "len": 1
                        },
                        "op": "array-contains",
                        "value": {
                            "stringValue": "grass"
                        }
                    }
                ],
                "limit": 20,
                "startAt": null,
                "endAt": null,
                "_t": "users|f:keywordsarray-containsgrass|ob:displayNameasc,__name__asc|l:20"
            }
        },
        "docs": {
            "keyedMap": {
                "root": {
                    "size": 0
                }
            },
            "sortedSet": {
                "root": {
                    "size": 0
                }
            }
        },
        "oldDocs": {
            "keyedMap": {
                "root": {
                    "size": 0
                }
            },
            "sortedSet": {
                "root": {
                    "size": 0
                }
            }
        },
        "docChanges": [],
        "mutatedKeys": {
            "data": {
                "root": {
                    "size": 0
                }
            }
        },
        "fromCache": false,
        "syncStateChanged": true,
        "excludesMetadataChanges": false,
        "hasCachedResults": true
    },
    "metadata": {
        "hasPendingWrites": false,
        "fromCache": false
    },
    "query": {
        "converter": null,
        "_query": {
            "path": {
                "segments": [
                    "users"
                ],
                "offset": 0,
                "len": 1
            },
            "collectionGroup": null,
            "explicitOrderBy": [
                {
                    "field": {
                        "segments": [
                            "displayName"
                        ],
                        "offset": 0,
                        "len": 1
                    },
                    "dir": "asc"
                }
            ],
            "filters": [
                {
                    "field": {
                        "segments": [
                            "keywords"
                        ],
                        "offset": 0,
                        "len": 1
                    },
                    "op": "array-contains",
                    "value": {
                        "stringValue": "grass"
                    }
                }
            ],
            "limit": 20,
            "limitType": "F",
            "startAt": null,
            "endAt": null,
            "wt": [
                {
                    "field": {
                        "segments": [
                            "displayName"
                        ],
                        "offset": 0,
                        "len": 1
                    },
                    "dir": "asc"
                },
                {
                    "field": {
                        "segments": [
                            "__name__"
                        ],
                        "offset": 0,
                        "len": 1
                    },
                    "dir": "asc"
                }
            ],
            "gt": {
                "path": {
                    "segments": [
                        "users"
                    ],
                    "offset": 0,
                    "len": 1
                },
                "collectionGroup": null,
                "orderBy": [
                    {
                        "field": {
                            "segments": [
                                "displayName"
                            ],
                            "offset": 0,
                            "len": 1
                        },
                        "dir": "asc"
                    },
                    {
                        "field": {
                            "segments": [
                                "__name__"
                            ],
                            "offset": 0,
                            "len": 1
                        },
                        "dir": "asc"
                    }
                ],
                "filters": [
                    {
                        "field": {
                            "segments": [
                                "keywords"
                            ],
                            "offset": 0,
                            "len": 1
                        },
                        "op": "array-contains",
                        "value": {
                            "stringValue": "grass"
                        }
                    }
                ],
                "limit": 20,
                "startAt": null,
                "endAt": null,
                "_t": "users|f:keywordsarray-containsgrass|ob:displayNameasc,__name__asc|l:20"
            }
        },
        "type": "query",
        "firestore": {
            "app": {
                "_isDeleted": false,
                "_options": {
                    "apiKey": "AIzaSyAtVw4N9qaN7fGOlvUXribNSd3Uxs-tF7Q",
                    "authDomain": "chatbot-ba694.firebaseapp.com",
                    "projectId": "chatbot-ba694",
                    "storageBucket": "chatbot-ba694.appspot.com",
                    "messagingSenderId": "1054304384986",
                    "appId": "1:1054304384986:web:eab6c30ab3dd6e704072e3",
                    "measurementId": "G-9TC8SS4L8S"
                },
                "_config": {
                    "name": "[DEFAULT]",
                    "automaticDataCollectionEnabled": false
                },
                "_name": "[DEFAULT]",
                "_automaticDataCollectionEnabled": false,
                "_container": {
                    "name": "[DEFAULT]",
                    "providers": {}
                }
            },
            "databaseId": {
                "projectId": "chatbot-ba694",
                "database": "(default)"
            },
            "settings": {
                "host": "localhost:8080",
                "ssl": false,
                "ignoreUndefinedProperties": false,
                "cacheSizeBytes": 41943040,
                "experimentalForceLongPolling": false,
                "experimentalAutoDetectLongPolling": false,
                "useFetchStreams": true
            }
        }
    }
}